'use client'

import { signInWithGoogle } from "@/services/firebase"
import Link from "next/link"

export default function JoinModal() {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn px-10 lg:text-xl bg-third hover:bg-secondary hover:text-primary duration-300" onClick={() => document.getElementById('my_modal_2').showModal()}>Join</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-xl md:text-4xl">Select the role you want to register!</h3>
                    <div className="py-4">
                        <button className="btn bg-third hover:bg-secondary hover:text-primary duration-300 mr-5 w-36 md:w-52 md:h-20 md:text-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>Member</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <button className="btn bg-secondary text-third hover:bg-third hover:text-secondary duration-300 w-full mb-5" onClick={signInWithGoogle}>

                                    Continue with Google
                                </button>
                                <Link href='/Register'>
                                    <button className="btn w-full bg-secondary text-third hover:bg-third hover:text-secondary duration-300">
                                        Continue with E-Mail
                                    </button>
                                </Link>

                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                        <button className="btn bg-third duration-300 hover:bg-secondary hover:text-primary w-36 md:w-52 md:h-20 md:text-xl" onClick={() => document.getElementById('my_modal_4').showModal()}>Mentor</button>
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
