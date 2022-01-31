import { useState } from 'react';

const Folder = ({ json }) => {
    const [expand, setExpand] = useState(false);

    if (json.isFolder) {
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>
                    {json.name}<br />
                </span>
                <div style={{ display: expand ? 'block' : 'none' }}>
                    {json.items.map(item => {
                        return <Folder key={item.name} json={item} />
                    })}
                </div>
            </div>
        );
    } else {
        return <span>{json.name}</span>
    }

}

export default Folder;
