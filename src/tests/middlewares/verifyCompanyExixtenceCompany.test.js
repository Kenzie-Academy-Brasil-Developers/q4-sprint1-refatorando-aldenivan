import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { verifyCompanyExistence } from '../../middlewares';
import generateCompany from '../dataToUseInTests';
import { companies } from '../../configs';

describe('verifyCompanyExistence Middleware Test', () => {
  const mockReq = {};
  const mockRes = {};
  const nextFn = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('404: Company not registered', () => {
    mockReq.params = {
      cnpj: '00000000000000',
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    const expectedStatusCode = 400;
    const expectedMessege = { message: 'Company not registered' };

    expect(mockRes.status).toBeCalledWith(expectedStatusCode);
    expect(mockRes.json).toBeCalledWith(expectedMessege);
  });

  it('Company found', () => {
    const company = generateCompany();
    companies.push(company);

    mockRes.params = {
      uuid: company.cnpj,
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    expect(nextFn).toBeCalledTimes(1);
    expect(mockReq.company).toBe(company);
  });
});
