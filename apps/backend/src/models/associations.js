import {Usuario} from './Usuario.js';
import {Estabelecimento} from './Estabelecimento.js';
import {Combo} from './Combo.js';
import {Comentario} from './Comentario.js';




// USUÁRIO → ESTABELECIMENTOS (One-to-Many)
Usuario.hasMany(Estabelecimento, {
foreignKey: 'fornecedor_id',
  as: 'estabelecimentos'
});
Estabelecimento.belongsTo(Usuario, {
  foreignKey: 'fornecedor_id',
  as: 'fornecedor'
});
+-
// ESTABELECIMENTO → COMBOS (One-to-Many)
Estabelecimento.hasMany(Combo, {
  foreignKey: 'estabelecimento_id',
  as: 'combos'
});
Combo.belongsTo(Estabelecimento, {
  foreignKey: 'estabelecimento_id',
  as: 'estabelecimento'
});

//USUÁRIO → COMENTÁRIOS (One-to-Many)
Usuario.hasMany(Comentario, {
  foreignKey: 'usuario_id',
  as: 'comentarios'
});
Comentario.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

//ESTABELECIMENTO → COMENTÁRIOS (One-to-Many)
Estabelecimento.hasMany(Comentario, {
  foreignKey: 'estabelecimento_id',
  as: 'comentarios'
});
Comentario.belongsTo(Estabelecimento, {
  foreignKey: 'estabelecimento_id',
  as: 'estabelecimento'
});

export { Usuario, Estabelecimento, Combo, Comentario };
