import React from 'react'
import { Calendar, ChartArea, Facebook, Home, Linkedin, Mail, Twitter } from "lucide-react";

const Acceuille = () => {
    return (
        <div className="sectionAccueille h-full relative">

            <div className="w-full h-full flex items-center justify-center">


                {/* div contenue  accueille  */}
                <div className="text-center text-white">
                    <p className="font-bold text-[25px]">Bienvenue</p>
                    <p className="font-[800] text-[80px]">Digithèque</p>
                    <div className="">
                        <p className="lg:w-[35vw] text-[18px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            sed maiores possimus tenetur ex.
                        </p>
                    </div>

                    {/* div icon rond  */}
                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <div className="rounded-full border w-9 h-9 flex items-center justify-center">
                            <Facebook />
                        </div>

                        <div className="rounded-full border w-9 h-9 flex items-center justify-center">
                            <Twitter />
                        </div>

                        <div className="rounded-full border w-9 h-9 flex items-center justify-center">
                            <Mail />
                        </div>

                        <div className="rounded-full border w-9 h-9 flex items-center justify-center">
                            <Linkedin />
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white shadow-lg lg:rounded-lg grid grid-cols-12 px-8 py-6 w-full lg:w-auto z-10">
                <div className="col-span-6 lg:col-span-8 px-4">

                    <p className="font-bold text-[15px] text-bleuRoi">BUT</p>
                    <p className="text-gray-500 hidden lg:block">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta deserunt commodi veritatis soluta dolore animi et,
                        atque tenetur, eos saepe earum quasi omnis qui.
                    </p>
                    <p className="text-gray-500 block lg:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        ....
                    </p>
                    <button className="text-center px-4 py-1 rounded-sm text-white bg-bleuRoi text-[12px]">
                        Lisez-plus
                    </button>

                </div>

                <div className="col-span-6 lg:col-span-4 border-l-[4px] border-bleuRoi px-4">
                    <div className="flex items-center justify-start space-x-4">
                        <ChartArea className="text-bleuRoi" />
                        <p className="text-gray-500">Accompagnements</p>
                    </div>

                    <div className="flex items-center justify-start space-x-4 my-4">
                        <Calendar className="text-bleuRoi" />
                        <p className="text-gray-500">Formations</p>
                    </div>

                    <div className="flex items-center justify-start space-x-4 my-4">
                        <Home className="text-bleuRoi" />
                        <p className="text-gray-500">Digithèques</p>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Acceuille
