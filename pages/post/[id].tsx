import { useRouter } from 'next/router';
import { BookmarkSimple, ChatCircle, Heart, PaperPlaneTilt } from 'phosphor-react';

import { Container } from './styles';

export default function Post() {
    const { query } = useRouter();

    console.log(query);

    return (
        <Container>
            <div className="content">
                <header>
                    <img src="https://github.com/Joas-Assuncao.png" alt="Icon profile" />
                    <div className="name-location">
                        <strong>
                            Joas-Assuncao
                        </strong>
                        <small>
                            Brasilia - DF
                        </small>
                    </div>
                </header>
                <div className="container-image">
                    <img src="/github-background.jpg" alt="Github image" />
                </div>
                <footer>
                    <div className="icons">
                        <div className="primary-icons">
                            <Heart size={24} weight="bold" />
                            {/* <Heart size={24} color="#ed4956" weight="fill" /> */}
                            <ChatCircle size={24} weight="bold" />
                            <PaperPlaneTilt size={24} weight="bold" />
                        </div>
                        <div className="bookmark-icon">
                            <BookmarkSimple size={24} weight="bold" />
                        </div>
                    </div>
                    <p>
                        <strong>Joas-Assuncao</strong> Descrição do repositório Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos enim vitae qui debitis nemo commodi doloremque, nostrum repellat, veritatis alias perferendis eaque ad omnis laborum incidunt id! Dolore, debitis?...
                    </p>
                </footer>
            </div>
        </Container>
    );
}
