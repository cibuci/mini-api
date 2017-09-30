'use strict';

exports.index = async function() {
  const { Work } = this.model;
  const { per_page, page } = this.params;

  const query = Work.find().limit(per_page);
  if (page) query.skip(per_page * (page - 1));

  const works = await query.exec();
  const total = await Work.count();

  // set meta info
  this.meta = { total };
  this.data = works;
};

exports.show = async function() {
  const { Work } = this.model;

  const work = await Work.findById(this.params.id);
  this.data = work;
};

exports.create = async function() {
  const { Work } = this.model;

  const newWork = this.params.data;
  this.data = await Work.create(newWork);
};

exports.update = async function() {
  const { Work } = this.model;

  const work = this.params.data;
  await Work.update(work);
};

exports.destroy = async function() {
  const { Work } = this.model;

  const work = await Work.findById(this.params.id);
  await work.remove();
};
