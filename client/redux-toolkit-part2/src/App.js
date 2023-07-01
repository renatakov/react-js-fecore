import {useForm} from "react-hook-form"
import {PatternFormat} from "react-number-format"

function App() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div> 
        <label>First name</label>
        <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            {...register("firstName", {required: true})}
        />
        {errors.firstName && console.log("Error")}
    </div>
    <div>
        <label>Last name</label>
        <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            {...register("lastName", {required: true, pattern: /^.{3,20}$/})}

            />
        {errors.lastName && console.log("Error")}

            </div>
            <div>
        <label>Email</label>
        <input
            type="email"
            name="email"
            placeholder="Enter email"
            {...register("email", {required: true})}

            />
        {errors.email && console.log("Error")}

            </div>
            <div>
        {/* <label>Phone Number</label> */}
          {/* <PatternFormat
          format='+38 (###)-(###)-(##)-(##)'
          allowEmptyFormatting mask="_"
          {...register("phone", {required:true})}
          /> */}
            </div>
            <div>
        <label>Bio</label>
        <textarea
            type="text"
            name="bio"
            placeholder="Enter your bio"
            {...register("bio", {required: false})}

            />
            </div>
            <button type="submit">Add new user</button>
            </form>
  );
}

export default App;
