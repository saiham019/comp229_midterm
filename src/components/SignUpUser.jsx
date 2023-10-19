import React from 'react'
import { useForm, Controller } from 'react-hook-form';

export default function SignUpUser() {

    const{
        handleSubmit,
        control,
        formState:{errors},
        
    
    
    }=useForm();

    const onSubmit=(data)=>{
        const{password,confirmPassword}=data;
        if(password!==confirmPassword){
            alert("Passwords do not match");
            
        }
        else{
            alert(JSON.stringify(data,null,2));
            console.log(data);

        }
    };
   
     
  return (
    <div>
        <center> 
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>First Name</h3>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p className="error">First Name is required</p>}
      </div>

      <div>
        <h3>Last Name</h3>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <p className="error">Last Name is required</p>}
      </div>

      <div>
        <h3>User Name</h3>
        <Controller
          name="userName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors.userName && <p className="error">User Name is required</p>}
      </div>

      <div>
        <h3>Email</h3>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+$/i,
          }}
          render={({ field }) => <input {...field} />}
        />
        {errors.email && errors.email.type === 'required' && (
          <p className="error">Email is required</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className="error">Invalid email format</p>
        )}
      </div>

      <div>
        <h3>Password</h3>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && <p className="error">Password is required</p>}
      </div>

      <div>
        <h3>Confirm Password</h3>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.confirmPassword && <p className="error">Confirm Password is required</p>}
      </div>

      <button type="submit">Submit</button>
      <br/> <br/> <br/> <br/>
    </form>
    </center>
  </div>
);
}
