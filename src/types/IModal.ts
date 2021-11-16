import { Dispatch, SetStateAction } from 'react';
import IPost from './IPost';

export default interface IModal {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    post: IPost
}