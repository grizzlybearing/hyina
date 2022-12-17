import React, {useState} from 'react';
import template from './Photos.module.css'
import CloseIcon from '@mui/icons-material/Close';
import s from './Photos.module.css';
import {useTranslation} from "react-i18next";

const Photos = (props) => {
    const {t} = useTranslation();
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        
        

        <div className={s.wrapper}>
            <h1>{t('gallery')}</h1>
            <div className={model ? `${template.model} ${template.open}` : template.model}>
            
                <img src={tempImgSrc} alt=""/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            
            <div className={template.gallery}>
                {props.photos.map((imgSrc, i) => {
                    
                    let width = '100%';
                    return (
                        <div className={template.pics} key={i} onClick={() => getImg(imgSrc)}>
                            <img src={imgSrc} alt="" style={{width: width}}/>
                        </div>
                    )
                    
                })}
            </div>
        </div>
        
    );
};

export default Photos;