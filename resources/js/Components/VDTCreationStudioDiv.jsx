import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {useTranslation} from 'react-i18next';

const VDTCreationStudioDiv = ()=>
{
    const {t, i18n} = useTranslation();
    return(
        <div className="grid grid-cols-6 text-xl my-5 font-mono leading-auto text-white/50">
            <p className="col-span-4 col-start-3 inline-flex items-center"><ApplicationLogo
                className="h-7 fill-current"/>'s {t("video creation studio")}
            </p>
        </div>
    )
}
export default VDTCreationStudioDiv
