interface Props {
    id: string;
    url: string;
    title: string;
    width: number;
    height: number;
}

const Gif = ({ id, url, title, width, height }: Props) => {
    return (
        <div key={id} className="gif-card">
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>
                {width}x{height}
            </p>
        </div>
    )
}

export default Gif
