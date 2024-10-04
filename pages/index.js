function Home() {
    return (
        <>
            <h1>Digite seu nome</h1>
            <div>
                <input type='text' />
                <button onClick={() => alert('Seu nome é HELLO WORLD')}>DESCOBRIR!</button>
            </div>
        </>
    )
}

export default Home;