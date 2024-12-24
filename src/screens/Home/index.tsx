import { Container } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Status } from "@components/Status";
import { Tasks } from "@components/Task";

export function Home() {

    return (
        <Container>
            <Header />
            <Input />
            <Status />
            <Tasks/>

        </Container>
    );
}