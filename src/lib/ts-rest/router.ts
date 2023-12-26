import { initContract } from '@ts-rest/core';
import { API_ROUTE } from '../../constants';
import { z } from 'zod';

const c = initContract();

export const router = c.router({
  getAllTodo: {
    method: 'GET',
    path: API_ROUTE.GET,
    responses: {
      200: z.array(
        z.object({
          id: z.number(),
          title: z.string(),
        }),
      ),
    },
  },
  createTodo: {
    method: 'POST',
    path: API_ROUTE.CREATE,
    responses: {
      201: z.object({
        id: z.number(),
        title: z.string(),
      }),
    },
    body: z.object({
      title: z.string(),
    }),
  },
  updateTodo: {
    method: 'PATCH',
    path: API_ROUTE.UPDATE,
    responses: {
      204: z.object({
        id: z.number(),
        title: z.string(),
      }),
    },
    pathParams: z.object({ id: z.number() }).required(),
    body: z.object({
      title: z.string(),
    }),
  },
  deleteTodo: {
    method: 'DELETE',
    path: API_ROUTE.DELETE,
    responses: {
      200: z.object({
        id: z.number(),
        title: z.string(),
      }),
    },
    pathParams: z.object({ id: z.number() }).required(),
    body: z.undefined(),
  },
});
