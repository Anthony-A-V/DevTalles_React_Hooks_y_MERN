import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroesData from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  // Tarea:
  // Debe de retornar un arreglo con los héroes de DC
  // Lenght === 3
  // toEqual al arreglo filtrado

  // Debe de retornar un arreglo con los héroes de Marvel
  // lenght === 2

  test('getHeroesByOwner debe de retornar la longitud y el arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
     expect(heroes).toEqual(heroesData.filter((hero) => hero.owner === owner));
  });

  test('getHeroesByOwner debe de retornar la longitud y el arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
  });
});
