import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('check content', () => {
    render(<Button content="button" type="button" btn="btn" />);
    const button = screen.getByText('button');
    expect(button).toBeInTheDocument();
  });

  it('check class', () => {
    render(<Button content="button" type="button" btn="btn-class" />);
    const button = screen.getByText('button');
    expect(button).toHaveClass('btn-class');
  });

  it('check type', () => {
    render(<Button content="button" type="submit" btn="btn" />);
    const button = screen.getByText('button');
    expect(button.getAttribute('type')).toEqual('submit');
  });

  it('check click', () => {
    const handleClick = jest.fn();
    render(<Button content="button" type="button" btn="btn" onClick={handleClick} />);
    const button = screen.getByText('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('check 2 times click', () => {
    const handleClick = jest.fn();
    render(<Button content="button" type="button" btn="btn" onClick={handleClick} />);
    const button = screen.getByText('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
