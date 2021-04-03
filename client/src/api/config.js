// export const domain = 'http://localhost:8083'  // development env 
export const domain = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
console.log('domain', domain);

const config = {
  root: {
    find: {
      type: 'POST',
      url: `${domain}/find`
    },
    query: {
      type: 'POST',
      url: `${domain}/query`
    },
    save: {
      type: 'POST',
      url: `${domain}/save`
    },
    delete: {
      type: 'POST',
      url: `${domain}/delete`
    },
    import: {
      type: 'POST',
      url: `${domain}/import`
    },
    rowtoken: {
      type: 'POST',
      url: `${domain}/rowtoken`
    },
    truncate: {
      type: 'POST',
      url: `${domain}/truncate`
    },
    keyspace: {
      type: 'GET',
      url: `${domain}/keyspace`
    },
    table: {
      type: 'GET',
      url: `${domain}/table`
    },
    row: {
      type: 'GET',
      url: `${domain}/row`
    },
    columns: {
      type: 'GET',
      url: `${domain}/columns`
    },
    describe: {
      type: 'GET',
      url: `${domain}/describe`
    },
    export: {
      type: 'GET',
      url: `${domain}/export`
    },
    hostinfo: {
      type: 'GET',
      url: `${domain}/hostinfo`
    }
  }
}

export default config
