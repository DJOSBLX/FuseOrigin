import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Paper from '@mui/material/Paper';
import FormHelperText from '@mui/material/FormHelperText';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/**
 * Form Validation Schema
 */
const schema = z
	.object({
		affiliateId: z.string().nonempty('Affiliate ID is required'),
		username: z.string().nonempty('Username is required'),
		email: z.string().email('You must enter a valid email').nonempty('Email is required'),
		phone: z.string().nonempty('Phone number is required'),
		password: z
			.string()
			.nonempty('Please enter your password.')
			.min(8, 'Password is too short - should be 8 chars minimum.'),
		passwordConfirm: z.string().nonempty('Password confirmation is required'),
		acceptTermsConditions: z.boolean().refine((val) => val === true, 'The terms and conditions must be accepted.')
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords must match',
		path: ['passwordConfirm']
	});

const defaultValues = {
	affiliateId: '',
	username: '',
	email: '',
	phone: '',
	password: '',
	passwordConfirm: '',
	acceptTermsConditions: false
};

/**
 * The classic sign up page.
 */
function SignUpPage() {
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	function onSubmit() {
		reset(defaultValues);
	}

	return (
		<div className="flex min-w-0 flex-auto flex-col items-center justify-center min-h-screen">
			<Paper className="min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320 text-center">
					<img
						className="w-48 mx-auto"
						src="assets/images/logo/logo.svg"
						alt="logo"
					/>

					<Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
						Sign up
					</Typography>
					<div className="mt-2 flex items-baseline font-medium justify-center">
						<Typography>Already have an account?</Typography>
						<Link
							className="ml-4"
							to="/sign-in"
						>
							Sign in
						</Link>
					</div>

					<form
						name="registerForm"
						noValidate
						className="mt-32 flex w-full flex-col justify-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="affiliateId"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Affiliate ID"
									autoFocus
									type="text"
									error={!!errors.affiliateId}
									helperText={errors?.affiliateId?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="username"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Username"
									type="text"
									error={!!errors.username}
									helperText={errors?.username?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Email"
									type="email"
									error={!!errors.email}
									helperText={errors?.email?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Phone"
									type="text"
									error={!!errors.phone}
									helperText={errors?.phone?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Password"
									type="password"
									error={!!errors.password}
									helperText={errors?.password?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="passwordConfirm"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Confirm Password"
									type="password"
									error={!!errors.passwordConfirm}
									helperText={errors?.passwordConfirm?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="acceptTermsConditions"
							control={control}
							render={({ field }) => (
								<FormControl
									className="items-center"
									error={!!errors.acceptTermsConditions}
								>
									<FormControlLabel
										label="I agree to the Terms of Service and Privacy Policy"
										control={
											<Checkbox
												size="small"
												{...field}
											/>
										}
									/>
									<FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
								</FormControl>
							)}
						/>

						<Button
							variant="contained"
							color="secondary"
							className=" mt-24 w-full"
							aria-label="Register"
							disabled={_.isEmpty(dirtyFields) || !isValid}
							type="submit"
							size="large"
						>
							Create your free account
						</Button>
					</form>
				</div>
			</Paper>
		</div>
	);
}

export default SignUpPage;
