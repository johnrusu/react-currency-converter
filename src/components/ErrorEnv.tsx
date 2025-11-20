const ErrorEnv = () => (
  <div className="env-error">
    <h2>
      Environment variables are not set. Please set the environment variables
      and restart the application.
    </h2>
    <p>
      Make sure to create a <code>.env</code> file in the root directory of the
      project with the following content:
    </p>
    <pre>
      <code>CURRENCY_API_KEY=your_api_key_here</code>
    </pre>
    <p>
      Replace <code>your_api_key_here</code> with your actual API key.
    </p>
  </div>
);

export default ErrorEnv;
