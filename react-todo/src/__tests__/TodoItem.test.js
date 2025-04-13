import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from '../components/TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false
  };

  it('renders the todo text', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={() => {}} 
        onDelete={() => {}} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const mockOnToggle = jest.fn();
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={() => {}} 
      />
    );
    
    fireEvent.click(screen.getByText('Test Todo'));
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={() => {}} 
        onDelete={mockOnDelete} 
      />
    );
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it('shows completed style when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={() => {}} 
        onDelete={() => {}} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toHaveStyle('text-decoration: line-through');
  });
});