'use client'
export default function JoinModal() {


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn w-28 text-lg" onClick={() => document.getElementById('my_modal_2').showModal()}>Join</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-xl md:text-4xl">Select the role you want to register!</h3>
                    <div className="py-4">

                        <button className="btn btn-neutral mr-5 w-36 md:w-52 md:h-20 md:text-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>Member</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <button className="btn w-full mb-5">
                                    Continue with Google
                                </button>
                                <button className="btn w-full">
                                    Continue with E-Mail
                                </button>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                        <button className="btn btn-neutral w-36 md:w-52 md:h-20 md:text-xl" onClick={() => document.getElementById('my_modal_4').showModal()}>Mentor</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>

                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
