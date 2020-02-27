import React from 'react'
import {
    Container,
    CodeContainer,
    Code
} from './InstalationForm.styles'

function InstalationForm(props) {
    return (
        <Container>
            <CodeContainer>
                <Code>{props.navigation.state.params.data.data}</Code>
            </CodeContainer>
        </Container>
    )
}

InstalationForm.navigationOptions = {
    header: null
}

export default InstalationForm