import { UploadFile } from "element-plus";
import { PropType } from "vue";
export declare const newImagePrew: {
    file: {
        type: PropType<UploadFile & {
            loadProgress: number;
        }>;
    };
    fileList: {
        type: PropType<{
            name?: string | undefined;
            url: string;
        }[]>;
        default: () => never[];
    };
};
