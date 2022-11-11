import React from "react";
import { Layout, ModuleDetail, QueryResult } from "../components";
import {gql, useQuery} from '@apollo/client'

const MODULE_QUERY = gql`
query getModuleForATrack($trackId: ID!, $moduleId: ID!) {
  track(id: $trackId) {
    title
    modules {
      id
      title
      length
    }
  }
  module(id: $moduleId) {
    id
    title
    videoUrl
    content
  }
}
`

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(MODULE_QUERY, {
    variables: { trackId, moduleId },
  })
  return (<Layout fullWidth>
    <QueryResult error={error} loading={loading} data={data}>
      <ModuleDetail module={data?.module} track={data?.track} />
    </QueryResult>
  </Layout>)
};
 
export default Module;