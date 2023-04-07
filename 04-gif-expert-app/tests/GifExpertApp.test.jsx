import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('debe de retornar 2 categorías al iniciar', () => {
    render(<GifExpertApp />);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('debe de retornar más de 2 categorías al ingresar una nueva categoría', () => {
    const inputValue = 'Saitama';

    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(
      2
    );
  });

  test('debe de retornar la misma cantidad de categorías al ingresar una categoría ya existente', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'One Punch' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });
});
