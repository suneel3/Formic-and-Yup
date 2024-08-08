import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Names can’t be that short—give us at least 2 characters!")
    .max(25, "That’s a long name! Try to keep it under 25 characters.")
    .required("We need your name to know who’s signing up!"),

  email: Yup.string()
    .email("Looks like you missed a dot or an @. Make it an email address!")
    .matches(
      /^[\w.+-]+@gmail\.com$/,
      "Your email should end with @gmail.com. No Yahoo or Hotmail, please!"
    )
    .required(
      "Email is a must! How else will we send you all those newsletters?"
    ),

  password: Yup.string()
    .min(6, "Your password should be at least 6 characters. Go a bit longer!")
    .matches(
      /^(?=.*[a-z])/,
      "Include at least one lowercase letter. Small letters need love too!"
    )
    .matches(/^(?=.*[A-Z])/, "Add an uppercase letter. Big letters are cool!")
    .matches(/^(?=.*\d)/, "Throw in a number. Your password loves digits!")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Add a special character. Let’s make it magical!"
    )
    .matches(
      /.*\d$/,
      "End your password with a number. It loves to finish with digits!"
    )
    .required("Don’t forget your password. It’s the key to your account!"),

  confirm_password: Yup.string()
    .required("Confirm your password. It’s like saying, ‘I really mean it!’")
    .oneOf(
      [Yup.ref("password"), null],
      "Passwords must match. They’re best friends!"
    ),
});
