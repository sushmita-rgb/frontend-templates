export default function Steps(){
    return (
        <div className="relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                <div className="flex flex-col gap-4 lg:flex-row h-full w-full p-10 items-start">

                    <div className="flex flex-col gap-2">
                        <p className="text-9xl self-start bg-gradient-to-r from-[#38bdf8] to-[#a5b4fc] text-transparent bg-clip-text font-extrabold tracking-tight">
                            Step 1
                        </p>

                        <p className="text-8xl text-[#e0f2fe]">LOREM IPSUM</p>

                        {/* centered paragraph */}
                        <p className="self-center text-center max-w-2xl text-[#c7d2fe] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae consequuntur dolores eius et expedita facilis maiores
                            praesentium quidem, quos. Accusamus cum dolores dolorum ex fugit ipsam magni minus nostrum, recusandae. At, atque aut cumque cupiditate dicta eum
                            eveniet facere ipsum iste, laboriosam magni
                            minus quaerat quidem sunt suscipit tempore velit. Adipisci aut explicabo nulla rem, sit tenetur totam voluptatum.
                        </p>
                    </div>

                    {/* centered image */}
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img
                            src="https://images.pexels.com/photos/18681383/pexels-photo-18681383.jpeg"
                            className="h-64 w-auto rounded-2xl shadow-2xl"
                            alt="asset"
                        />
                    </div>

                </div>
            </div>



            <div
                className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                <h2 className="text-4xl font-bold">The Second slide</h2>
                <p className="mt-2">Scroll Down for next slide</p>
            </div>
            <div
                className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                <h2 className="text-4xl font-bold">The Third slide</h2>
                <p className="mt-2">Scroll Down</p>
            </div>
            <div
                className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                <h2 className="text-4xl font-bold">The Fourth slide</h2>
            </div>
        </div>
    )
}