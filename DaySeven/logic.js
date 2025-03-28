let userDetails = [
    { "name": "John Doe", "gender": "Male", "email": "johndoe@example.com" },
    { "name": "Jane Smith", "gender": "Female", "email": "janesmith@example.com" },
    { "name": "Alice Johnson", "gender": "Female", "email": "alicej@example.com" },
    { "name": "Bob Williams", "gender": "Male", "email": "bobw@example.com" },
    { "name": "Charlie Brown", "gender": "Male", "email": "charlieb@example.com" },
    { "name": "Emma Davis", "gender": "Female", "email": "emmad@example.com" },
    { "name": "Liam Miller", "gender": "Male", "email": "liamm@example.com" },
    { "name": "Olivia Wilson", "gender": "Female", "email": "oliviaw@example.com" },
    { "name": "Noah Anderson", "gender": "Male", "email": "noaha@example.com" },
    { "name": "Sophia Thomas", "gender": "Female", "email": "sophiat@example.com" },
    { "name": "James Martinez", "gender": "Male", "email": "jamesm@example.com" },
    { "name": "Isabella Garcia", "gender": "Female", "email": "isabellag@example.com" },
    { "name": "Benjamin Rodriguez", "gender": "Male", "email": "benjaminr@example.com" },
    { "name": "Mia Hernandez", "gender": "Female", "email": "miah@example.com" },
    { "name": "Elijah Lee", "gender": "Male", "email": "elijahl@example.com" },
    { "name": "Charlotte Perez", "gender": "Female", "email": "charlottep@example.com" },
    { "name": "William Harris", "gender": "Male", "email": "williamh@example.com" },
    { "name": "Amelia Clark", "gender": "Female", "email": "ameliac@example.com" },
    { "name": "Lucas Young", "gender": "Male", "email": "lucasy@example.com" },
    { "name": "Harper Lewis", "gender": "Female", "email": "harperl@example.com" }
  ]


  let maleUsers = userDetails.filter((iteam, index, arry)=>{
   return iteam.gender === 'Male';

  });
  console.log(maleUsers)