import { isNamespaceExport } from 'typescript';

export {
    IAuthPayload,
    IAuthDocument,
    IAuthBuyerMessageDetails,
    IEmailMessageDetails,
    IAuth,
    ISignUpPayload,
    ISignInPayload,
    IForgotPassword,
    IResetPassword,
    IReduxAuthPayload,
    IReduxAddAuthUser,
    IReduxLogout,
    IAuthResponse,
    IAuthUser,
} from './src/interfaces/auth.interface';


export { IBuyerDocument,
         IReduxBuyer
       } from './src/interfaces/buyer.interface';


export {
    IConversationDocument,
    IMessageDocument,
    IMessageDetails,
    IChatBoxProps,
    IChatSellerProps,
    IChatBuyerProps,
    IChatMessageProps,

} from './src/interfaces/chat.interface';

export{
    GigType,
    ICreateGig,
    ISellerGig,
    IGigContext,
    IGigsProps,
    IGigCardItems,
    IGigViewReviewsProps,
    IGigInfo,
    IGigTopProps,
} from './src/interfaces/gig.interface';

export {
    IOrderNotification,
    IOffer,
    IExtendedDelivery,
    IDeliveredWork,
    IOrderEvents,
    IOrderReview,
    IOrderMessage,
    IOrderDocument,
} from './src/interfaces/order.interface';

export {
    IReviewMessageDetails,
    IRatingTypes,
    IRatingCategories,
    IRatingCategoryItem,
    IReviewDocument,
} from './src/interfaces/review.interface';

export {
    ISearchResult,
    IHitsTotal,
    IQueryList,
    IQueryString,
    ITerm,
    IPaginateProps,
} from './src/interfaces/search.interface';

export {
    SellerType,
    ILanguage,
    IExperience,
    IEducation,
    ICertificate,
    ISellerDocument,
} from './src/interfaces/seller.interface';


export {
    IEmailLocals,
} from './src/interfaces/email.interface';

export {
    uploads,
    videoUpload
} from './src/cloudinary-upload';


export {
    IErrorResponse,
    IError,
    CustomError,
    BadRequestError,
    NotFoundError,
    NotAuthorizedError,
    FileTooLargeError,
    ServerError,
    ErrnoException,
} from './src/error-handler';

export {
    verifyGatewayRequest,
} from './src/gateway-middleware';

export {
    winstonLogger,
} from './src/logger';

export{
    firstLetterUppercase,
    lowerCase,
    toUpperCase,
    isEmail,
    isDataURL
} from './src/helpers';