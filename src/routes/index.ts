import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';  
import companyRoutes from './companyRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/product', productRoutes);  
apiRouter.use('/company', companyRoutes)

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 