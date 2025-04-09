import React from 'react'
import Img1 from '../assets/img/fontTheque.png'
import { Calendar } from 'lucide-react'
const Formation = () => {
    return (
        <div className="w-full bg-white">
            {/* titre Formations  */}
            <div className="flex items-center justify-start pl-16 py-3 rounded-tr-full rounded-br-full text-white bg-bleuRoi w-[20rem] space-x-4 mt-4">
                <Calendar />
                <p className="font-bold text-[25px]">Formations</p>
            </div>

            {/* div place des texte  */}
            <div className="grid lg:grid-cols-12">

                <div className=" lg:col-span-6">
                    <div className="px-6 lg:pl-16 mt-4">
                        <p className="text-bleuPolice">
                            Notre formation certifiante en numérique et application s’adresse à
                            des professionnels, à des étudiants, ou à des personnes en recherche d’emploi.
                        </p>
                    </div>

                    <div className=" mt-4 grid-cols-3 grid relative" >

                        {/* div place des rond et le ligne gris  */}
                        <div className="relative col-span-1 ">

                            <div className="h-[50vh] lg:h-[80vh] w-[2px] bg-gray-500 absolute top-[17rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[2rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[12rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[24rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>


                        </div>

                        {/* div place des  texte et des numeros  */}
                        <div className="col-span-2 mt-10 -ml-[4rem] sm:ml-0 px-4">
                            <div className="-px-[5rem]">
                                <p className="text-bleuPolice">
                                    Nos cours sont organisés en Unité de Crédit (UC) de 30 crédits par
                                    séance de 30 H, et validé par au moins 3 évaluations.
                                </p>

                                <div className="flex items-center justify-start space-x-4 mt-3">
                                    <div className="flex items-center justify-center rounded-lg w-16 h-12 bg-bleuRoi text-white">
                                        <p className="font-bold text-[19px]">01</p>
                                    </div>
                                    <p className="text-bleuRoi font-bold text-[25px]">Modalités</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <p className="text-bleuPolice">
                                    Acune procédure d'incription n'est demandée. Il suffit d'acheter un coupon d'unité de crédits qui donne droit à tous les cours de 30h du crédit.
                                    Dossier d'inscription : Une photo
                                    .
                                </p>

                                <div className="flex items-center justify-start space-x-4 mt-3">
                                    <div className="flex items-center justify-center rounded-lg w-16 h-12 bg-bleuRoi text-white">
                                        <p className="font-bold text-[19px]">02</p>
                                    </div>
                                    <p className="text-bleuRoi font-bold text-[25px]">Inscription</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <p className="text-bleuPolice">
                                    Une unité de crédits coûte 100 000 MGA.
                                    Une réduction est applicable pour un achat de coupons d'unités de formations, soit 450 000 MGA pour une unité de formations complètes.

                                    .
                                </p>

                                <div className="flex items-center justify-start space-x-4 mt-3">
                                    <div className="flex items-center justify-center rounded-lg w-16 h-12 bg-bleuRoi text-white">
                                        <p className="font-bold text-[19px]">03</p>
                                    </div>
                                    <p className="text-bleuRoi font-bold text-[25px]">Frais</p>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
                {/* place image en rond qui s affiche sur les grand ecran */}
                <div className="lg:col-span-6 relative hidden lg:block">
                    <img src={Img1} className="w-[10rem] h-[10rem] rounded-full absolute top-[5rem] left-[10rem]" />
                    <img src={Img1} className="w-[15rem] h-[15rem] rounded-full absolute top-[7rem] left-[22rem]" />
                    <img src={Img1} className="w-[20rem] h-[20rem] rounded-full absolute top-[17rem] left-[6rem]" />
                </div>


                {/* place image en carre au qui s affiche sur les petit ecran  */}
                <div className='grid sm:grid-cols-3 sm:gap-x-4 lg:hidden gap-y-4 px-8 my-8 sm:mt-8'>
                    <img src={Img1} className="w-full h-[15rem] rounded-lg" />
                    <img src={Img1} className="w-full h-[15rem] rounded-lg" />
                    <img src={Img1} className="w-full h-[15rem] rounded-lg" />
                </div>


            </div>

        </div>
    )
}

export default Formation
