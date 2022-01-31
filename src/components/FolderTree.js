import { useState } from 'react';
import Styled from 'styled-components';
import RowContainer from './RowContainer';

const Container = Styled.div`
    padding:0rem 1.5rem;
`

const FolderTree = ({ json }) => {
    const [expand, setExpand] = useState(false);
    const handleClick = () => {
        setExpand(!expand);
    }

    if (json.isFolder) {
        return (
            <Container>
                <RowContainer type={'folder'} name={json.name} handleClick={handleClick} />

                <div style={{ display: expand ? 'block' : 'none' }}>
                    {json.items.map(item => {
                        return <FolderTree key={item.name} json={item} />
                    })}
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <RowContainer type={'file'} name={json.name} />
            </Container>
        )
    }

}

export default FolderTree;
