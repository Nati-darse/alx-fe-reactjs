import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders initial todos', () => {
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');
    
    await userEvent.type(input, 'New Todo Item');
    await userEvent.click(button);
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    const todo = screen.getByText('Learn React');
    expect(todo).not.toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    const deleteButtons = screen.getAllByText('Delete');
    const initialCount = screen.getAllByRole('listitem').length;
    
    await userEvent.click(deleteButtons[0]);
    
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount - 1);
  });
});