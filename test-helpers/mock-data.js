const mockData = (function() {
  return { newUser: newUser };

  function newUser() {
    return [
      {
        firstName: 'Iwona',
        lastName: 'Mech',
        gender: 'female',
        id: 1,
        userName: 'Imech',
        password: 'vodka',
        email: 'imech@yahoo.com',
      },
    ];
  }
})();


export mockData;
