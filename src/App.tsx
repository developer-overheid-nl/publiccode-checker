import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import GitHubIcon from './components/GitHubIcon';
import SpecSelector from './components/SpecSelector';
import UriInput from './components/UriInput';
import { Spec } from './types';

interface Props {
  spec: Spec;
}

const App: FC<Props> = ({ spec }) => {
  const [uri, setUri] = useState('');

  const headerStyle = {
    color: 'white',
    background: "#154273"
  };

  const appStyle = {
    background: "#e2e8f0"
  }

  return (
    <div className="flex flex-col h-screen" style={appStyle}>
      <header className="flex justify-between items-center px-4 py-2 text-white" style={headerStyle}>
        <div>
          <h1 className="text-lg font-medium">
            <Link to="/">Publiccode Checker</Link>: <a href="">{spec.name}</a>
          </h1>
        </div>
        <UriInput onSubmit={setUri} />
        <div className="flex items-center">
          <SpecSelector className="mr-4" />
          <a href="https://github.com/developer-overheid-nl/publiccode-checker" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <CodeEditor spec={spec} uri={uri !== '' ? uri : undefined} />
      </div>
    </div>
  );
};

export default App;
