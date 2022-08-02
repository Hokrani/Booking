
const RegisterForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
}) => (
    <form onSubmit={handleSubmit} class="mt-3">
        <div class='form-group mb-3'>
            <label class="form-label"> Your Name </label>
            <input
                class="form-control"
                type="text"
                className='form-control'
                placeholder='ENTER YOUR NAME'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
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
        <button disabled={!name || !email || !password} class='btn btn-primary'>Submit</button>
    </form>
)

export default RegisterForm;