

const LoginForm = ({
    handleSubmit,

    email,
    setEmail,
    password,
    setPassword
}) => (
    <form onSubmit={handleSubmit} class="mt-3">

        <div class='form-group mb-3'>
            <label class="form-label"> Your Email id </label>
            <input
                class="form-control"
                type="email"
                className='form-control'
                placeholder='ENTER YOUR EMAIL ID'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div class='form-group mb-3'>
            <label class="form-label"> Your Password </label>
            <input
                class="form-control"
                type="password"
                className='form-control'
                placeholder='ENTER YOUR Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button disabled={!email || !password} class='btn btn-primary'>Login</button>
    </form>
)

export default LoginForm;