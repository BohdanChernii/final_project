db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    rules: [
      {
        role: 'readWrite',
        db: 'paid'
      }
    ]
  })