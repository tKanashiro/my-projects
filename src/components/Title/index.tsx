import "./Title.scss";

type TitleTyep = {
    title: string;
};

const Title = (props: TitleTyep) => {
    const { title } = props;

    return <h1 className="title">{title}</h1>;
};

export default Title;
