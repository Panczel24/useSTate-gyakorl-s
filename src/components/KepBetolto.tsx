type KepBetoltoProps = {
    kepUrl: string;
};

export function KepBetolto({ kepUrl }: KepBetoltoProps) {
    return (
        <img src={kepUrl} />
    );
}