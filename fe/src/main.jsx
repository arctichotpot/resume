import App from './App'
import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
import { RecoilRoot } from 'recoil';

const root = createRoot(container);

root.render(
    <RecoilRoot  >
        <HashRouter>
            <App />
        </HashRouter>
    </RecoilRoot>
);

