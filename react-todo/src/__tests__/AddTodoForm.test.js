import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  it('calls onAdd when form is submitted with non-empty text', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(mockOnAdd).toHaveBeenCalledWith('New Todo');
  });

  it('does not call onAdd when form is submitted with empty text', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });

  it('clears input after adding a todo', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(input.value).toBe('');
  });
});