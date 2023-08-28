import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

interface Props {
    setModalState : Dispatch<SetStateAction<boolean>>
    setIuniAlertVal : Dispatch<SetStateAction<boolean>>
    currentSize : string
}

export default function IuniAlert(props: Props) {
    const returnValue = (val : boolean) => {
        props.setModalState(() => false);
        props.setIuniAlertVal(() => val);   
    }

    return (
        <>
            <div className="m-1">
                <div className="modal-default">
                    <div className="modal-banner-box">
                        추후 작업
                    </div>

                    <div className="modal-title">
                        테마에 적용한 변경 내용을 저장하겠어요?
                    </div>

                    <div className="modal-sub-title">
                        저장하지 않으면 변경 내용이 없어져요.
                    </div>

                    <div className="modal-btn-list">
                        <button className="modal-cancle-btn"
                            onClick={() => returnValue(false)}>
                            취소
                        </button>
                        <button className="modal-submit-btn"
                            onClick={() => returnValue(true)}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}