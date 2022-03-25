import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// export const TransactionParam: () => ParameterDecorator = () => {
//     return createParamDecorator((_data, req) => {
//         return req.transaction;
//     });
// };

export const TransactionParam = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.transaction;
    },
  );