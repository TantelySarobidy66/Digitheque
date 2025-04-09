import { AlignLeft, ArrowLeft, ArrowRight, Book, BookDashed, BookKey, CheckIcon, DollarSign, DollarSignIcon, Dot, Pen } from 'lucide-react'
import React from 'react'

const Accompagnement = ({
    OpenInscription,
    OpenFrais,
    OpenModalite,
    OpenPress
}) => {
    return (
        <div className="h-full">
            <p className="text-center font-bold text-[35px] text-bleuRoi mt-[7rem] my-8">Accompagnement</p>

            <div className='w-full grid lg:grid-cols-2 gap-4 px-2 lg:px-16'>

                <div>

                   {/* texte du presentation  */}
                    <div className='sm:px-8 text-gray-500'>
                        <p className='text-bleuRoi font-bold text-[22px]'>Présentation</p>

                        <p className='my-3'>
                            L’accompagnement personnalisé s’adresse à des élèves au lycée (2nd, 1er, Tle).
                        </p>

                        <p className='my-3'>
                            Les élèves qui on une facilité en maths et en matières scientifiques ont une
                            forme d’intelligence, logico-maths, et une méthode naturelle d’apprentissage
                            plus adaptées à ces disciplines d’enseignement. Les élèves en difficultés
                            dans ces matières ont généralement une approche différente.
                            Certains ont des obstacles d’ordre psychologique séméiotique.
                        </p>

                        <p className='my-3'>
                            Ces accompagnements personnalisés par des enseignants chercheurs en
                            pédagogie propose une prise en charge des élèves en difficultés,
                            ont ceux qui souhaitent aller plus loin, concilier avec les
                            matières scientifiques.
                        </p>


                        <div className="w-[15vw] h-[6px] bg-bleuRoi rounded-full my-4"></div>

                    </div>
                </div>

                

                {/* div des 4 cadres , et si on click il ya des modale  */}
                <div className='w-full sm:mx-8 my-8'>
                    <div className='grid sm:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-r from-[#4f7d9a71] via-[#0833835e] to-[#07112375] rounded-lg px-6 py-3 '>
                            <p className='text-center text-white'>
                                Une science de 2 H qui regroupe 20 élèves au maximum consiste à répondre les difficultés de l’élève
                            </p>
                            <button
                                onClick={OpenPress}
                                className='flex items-center justify-center py-2 px-6 bg-bleuRoi text-white space-x-4 rounded-lg my-2'>
                                <p>Lisez plus</p>
                                <ArrowRight />
                            </button>


                        </div>

                        <div
                            onClick={OpenInscription}
                            className='bg-gradient-to-r from-[#4f7d9a71] via-[#446cb8d7] to-[#3a5fa3d1] rounded-lg 
                        px-6 py-3 hover:bg-bleuRoi cursor-pointer'>

                            <div className='flex items-center justify-start space-x-3'>
                                <div className='flex items-center justify-start space-x-3 bg-white rounded-full px-2 py-2'>
                                    <BookKey className="text-bleuRoi" />
                                </div>
                                <p className='text-white font-bold'>Inscription</p>
                            </div>
                            <p className='text-start my-2 text-white'>
                                Il suffit acheter un ou plusieurs carnets de coupons de 10 coupons.
                            </p>


                        </div>

                        <div
                            onClick={OpenModalite}
                            className='bg-gradient-to-r from-[#4f7d9a71] via-[#0833835e] to-[#07112375] h-[10rem] rounded-lg px-6 py-3 hover:bg-bleuRoi cursor-pointer'>
                            <div className='flex items-center justify-start space-x-3'>
                                <div className='flex items-center justify-start space-x-3 bg-white rounded-full px-2 py-2'>
                                    <CheckIcon className="text-bleuRoi" />
                                </div>
                                <p className='text-white font-bold'>Modalité</p>
                            </div>
                            <p className='text-start my-2 text-white'>
                                Les élèves ont ainsi la possibilité de choisir les séances adaptées de ses besoins.
                            </p>
                        </div>

                        <div
                            onClick={OpenFrais}
                            className='bg-gradient-to-r from-[#3f6e8ba1] via-[#083383a3] to-[#071123bc] h-[10rem] rounded-lg px-6 py-3 hover:bg-bleuRoi cursor-pointer'>
                            <div className='flex items-center justify-start space-x-3'>
                                <div className='flex items-center justify-start space-x-3 bg-white rounded-full px-2 py-2'>
                                    <DollarSignIcon className="text-bleuRoi" />
                                </div>
                                <p className='text-white font-bold'>Frais</p>
                            </div>
                            <p className='text-start my-2 text-white'>
                                Un frais de dossier de 10 000 MGA est demandé lors du prmier achat.
                            </p>
                        </div>



                    </div>
                </div>

            </div>
        </div>

    )
}

export default Accompagnement
