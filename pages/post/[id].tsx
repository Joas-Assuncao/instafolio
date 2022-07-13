import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './styles';

export default function Post() {
    const { query } = useRouter();

    console.log(query);

    return (
        <Container>post</Container>
    );
}
