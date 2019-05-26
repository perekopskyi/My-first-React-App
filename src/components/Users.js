import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User
        src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
        alt="John"
        name="John_Woodman"
      />
      <div className="users__block">
        <User
          src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
          alt="John"
          name="John_Woodman" 
          min
        />
        <User
          src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
          alt="John"
          name="John_Woodman"
          min
        />
        <User
          src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
          alt="John"
          name="John_Woodman"
          min
        />
        <User
          src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
          alt="John"
          name="John_Woodman"
          min
        />
      </div>
    </div>
  )
}
