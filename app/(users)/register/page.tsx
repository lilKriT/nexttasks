const Register = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container mt-8">
        <form>
          <label className="formText mt-8 flex gap-4 w-full max-w-2xl">
            <input type="text" className="formInput" />
          </label>
          <button className="btn btn--primary">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

// TODO: refactor into server action
