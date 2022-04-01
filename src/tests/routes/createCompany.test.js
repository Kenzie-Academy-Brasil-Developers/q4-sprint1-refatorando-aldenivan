import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../../app';
import generateCompany from '../dataToUseInTests';
import { companies } from '../../configs';

describe('Route Register Test', () => {
  const company = generateCompany();

  test('201 Created: resturn company and push to companies DB', async () => {
    const response = await request(app)
      .post('/companies/register')
      .send(company);

    const expectedStatusCode = 201;
    expect(response.statusCode).toBe(expectedStatusCode);

    const reqBodyKeys = Object.keys(response.body.company).sort();
    const expectedBodyKeys = Object.keys(company).sort();
    expect(reqBodyKeys).toEqual(expectedBodyKeys);
  });

  test('400 BAD REQUEST: CNPJ already registered', async () => {
    const response = await request(app)
      .post('/companies/register')
      .send(company);

    const expectedStatusCode = 400;
    expect(response.statusCode).toBe(expectedStatusCode);

    const expectedResponseBody = { message: 'CNPJ already registered' };
    expect(response.body).toEqual(expectedResponseBody);

    expect(companies.filter((_) => _.cnpj === company.cnpj)).toHaveLength(1);
  });

  test('400 BAD REQUEST: error, cnpj is a required field', async () => {
    const { cnpj, ...sendCompany } = company;

    const dbLengthBeforeRequest = companies.length;

    const response = await request(app)
      .post('/companies/register')
      .send(sendCompany);

    const expectedStatusCode = 400;
    expect(response.statusCode).toBe(expectedStatusCode);

    const expectedResponseBody = { error: 'Campo de cnpj obrigátorio' };
    expect(response.body).toEqual(expectedResponseBody);

    expect(dbLengthBeforeRequest).toEqual(companies.length);
  });

  test('400 BAD REQUEST: error, wrong state acronym', async () => {
    company.cnpj = '00000000000000';
    company.state = 'Txt';

    const response = await request(app)
      .post('/companies/register')
      .send(company);

    const dbLengthBeforeRequest = companies.length;

    const expectedStatusCode = 400;
    expect(response.statusCode).toBe(expectedStatusCode);

    const expectedResponseBody = {
      error: 'state must match the following: "/^[A-Z]{2}$/"',
    };
    expect(response.body).toEqual(expectedResponseBody);

    expect(dbLengthBeforeRequest).toEqual(companies.length);
  });
});
