  const IsExist_DB = async (modelname, filter) => {
    const find = await modelname?.findOne(filter).lean();
    return find ? find : false;
  };
  const FindAll_DB = async (modelname, filter = {}) => {
    const find = await modelname?.find(filter);
    return find ? find : false;
  };
  const FindAllDesc_DB = async (modelname, filter = {}) => {
    const find = await modelname?.find(filter).sort({ _id: -1 });
    return find ? find : false;
  };
  const AddTo_DB = async (modelname, object) => {
    const New = await modelname(object).save();
    return New ? true : false;
  };
  const UpdateTo_DB = async (modelname, filter, updates) => {
    const updated = await modelname?.findOneAndUpdate(filter, updates);
    return updated ? true : false;
  };
  const DeleteFrom_DB = async (modelname, filter) => {
    const updated = await modelname?.findOneAndDelete(filter);
    return updated ? true : false;
  };
  const Aggregate_DB = async (modelname, match, group, project) => {
    const result = await modelname?.aggregate([
      {
        $match: match,
      },
      {
        $group: group,
      },
      { $project: project },
    ]);
    return !result.length ? false : result;
  };


export {
  IsExist_DB,
  FindAll_DB,
  FindAllDesc_DB,
  AddTo_DB,
  UpdateTo_DB,
  DeleteFrom_DB,
  Aggregate_DB,
};
