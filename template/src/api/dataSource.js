/* eslint-disable */'use strict'// 数据源管理import http from 'luban-http'// 数据源连接测试export const ApiDataSourceConnectionTest = (params = null, query = null, config = {}) => http.$POST('api/dataSource/connectionTest', params, query, config, false)// 删除数据源export const ApiDataSourceDeleteDataSource = (id, params = null, query = null, config = {}) => http.$POST(`api/dataSource/deleteDataSource/${id}`, params, query, config, false)// 获取所有数据库类型export const ApiDataSourceFindAllDbType = (query = {}, params = null, config = {}) => http.$GET('api/dataSource/findAllDbType', query, params, config, false)// 根据id查询指定数据源连接信息export const ApiDataSourceFindById = (id, query = {}, params = null, config = {}) => http.$GET(`api/dataSource/findById/${id}`, query, params, config, false)// findOneByIdPrivateexport const ApiDataSourceFindOneByIdPrivate = (id, query = {}, params = null, config = {}) => http.$GET(`api/dataSource/findOneByIdPrivate/${id}`, query, params, config, false)// 根据id查询数据源export const ApiDataSourceFindOpenStatusById = (id, query = {}, params = null, config = {}) => http.$GET(`api/dataSource/findOpenStatusById/${id}`, query, params, config, false)// 查询所有的数据源列表export const ApiDataSourceGetAllSourceList = (params = null, query = null, config = {}) => http.$POST('api/dataSource/getAllSourceList', params, query, config, false)// 条件查询数据源列表export const ApiDataSourceGetList = (params = null, query = null, config = {}) => http.$POST('api/dataSource/getList', params, query, config, false)// 查询指定数据源中表名字和字段export const ApiDataSourceGetTableAndField = (id, query = {}, params = null, config = {}) => http.$GET(`api/dataSource/getTableAndField/${id}`, query, params, config, false)// 保存-修改数据源export const ApiDataSourceSaveDataSource = (params = null, query = null, config = {}) => http.$POST('api/dataSource/saveDataSource', params, query, config, false)