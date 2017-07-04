const basePath = 'http://127.0.0.1:5984'

const nodesActions = {
  getFullNode: { method: 'GET', url: `${basePath}/node/{_id}` }
}

export const nodeResource = resource => resource(`${basePath}/node/{_id}`, {}, nodesActions)
